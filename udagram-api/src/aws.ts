import AWS = require("aws-sdk");
import { config } from "./config/config";

// Configure AWS
const credentials = new AWS.SharedIniFileCredentials({ profile: "default" });
/* credentials["sessionToken"] =
  "FwoGZXIvYXdzEEIaDJG3JX7bTxy8tCdt1iK8AcHMHJGyvL0INy3ngeQ0zlNFWM+s9zOe9Gj5umPsp5WgUXf4ggMNJPmeAI8Y12GbULg/1T2UnOTJKq+pPxsvgnZRYJoiTr5Wviebe6HZGBdlWLafGom7GOoOhHnNdHzxyHICeV3D+cp3dgxurxsm9yXBJ6ZCMhyL3ve3kxdfKKMEqKHGVXRgxvsbiBJLSv9ACbWcTnG7YaTB+cI/m4Ap0DbiRoiyIXtYmgnhsaCkdPOLcnZ0Z+HpsA2njDoiKK6tlZEGMi0841/faTPMQX0BsEQiqpe2nB13xfZH+6W1Lo9lfdbw9y5vpWl5TM8JfdghHC4=";
  */
/* const credentials = new AWS.Credentials({
  accessKeyId: "ASIA6QL6PNGUPF32OY65",
  secretAccessKey: "OR1K6CqNhFoBRImjoWeHTe+CktwTGxWX8rvUIzJZ",
  sessionToken:
    "FwoGZXIvYXdzEEIaDJG3JX7bTxy8tCdt1iK8AcHMHJGyvL0INy3ngeQ0zlNFWM+s9zOe9Gj5umPsp5WgUXf4ggMNJPmeAI8Y12GbULg/1T2UnOTJKq+pPxsvgnZRYJoiTr5Wviebe6HZGBdlWLafGom7GOoOhHnNdHzxyHICeV3D+cp3dgxurxsm9yXBJ6ZCMhyL3ve3kxdfKKMEqKHGVXRgxvsbiBJLSv9ACbWcTnG7YaTB+cI/m4Ap0DbiRoiyIXtYmgnhsaCkdPOLcnZ0Z+HpsA2njDoiKK6tlZEGMi0841/faTPMQX0BsEQiqpe2nB13xfZH+6W1Lo9lfdbw9y5vpWl5TM8JfdghHC4=",
}); */

AWS.config.credentials = credentials;

export const s3 = new AWS.S3({
  signatureVersion: "v4",
  region: config.aws_region,
  params: { Bucket: config.aws_media_bucket },
});

// Generates an AWS signed URL for retrieving objects
export function getGetSignedUrl(key: string): string {
  const signedUrlExpireSeconds = 60 * 5;

  return s3.getSignedUrl("getObject", {
    Bucket: config.aws_media_bucket,
    Key: key,
    Expires: signedUrlExpireSeconds,
  });
}

// Generates an AWS signed URL for uploading objects
export function getPutSignedUrl(key: string): string {
  const signedUrlExpireSeconds = 60 * 5;

  return s3.getSignedUrl("putObject", {
    Bucket: config.aws_media_bucket,
    Key: key,
    Expires: signedUrlExpireSeconds,
    ContentType: "application/octet-stream",
  });
}
