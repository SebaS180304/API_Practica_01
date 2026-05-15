import crypto from "crypto";

const ITERATIONS = 100_000;
const KEY_LENGTH = 64;
const DIGEST = "sha512";
const SALT_SIZE = parseInt(process.env.SALT_SIZE);
const PEPPER = process.env.PEPPER;

export const hashPassword = (password) => {
  const salt = crypto.randomBytes(SALT_SIZE).toString("hex");
  const hash = crypto
    .pbkdf2Sync(password + PEPPER, salt, ITERATIONS, KEY_LENGTH, DIGEST)
    .toString("hex");
  return `${salt}:${hash}`;
};

export const verifyPassword = (password, stored) => {
  const [salt, storedHash] = stored.split(":");
  const derivedHash = crypto
    .pbkdf2Sync(password + PEPPER, salt, ITERATIONS, KEY_LENGTH, DIGEST)
    .toString("hex");
  return crypto.timingSafeEqual(
    Buffer.from(storedHash, "hex"),
    Buffer.from(derivedHash, "hex"),
  );
};
