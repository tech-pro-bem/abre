export function formatFileName(filename: string) {
  return filename.toLocaleLowerCase().split(" ").join("-");
}
