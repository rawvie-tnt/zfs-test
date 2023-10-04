import checkDiskSpace, { checkZfsPool } from "check-disk-space";

const main = async () => {
  const pathToCheck = "D:/td/iagon"; //enter path to check
  const space = await checkDiskSpace(pathToCheck);
  const zfsSpace = await checkZfsPool(pathToCheck);

  console.log(space);
  console.log(zfsSpace);
};

main();