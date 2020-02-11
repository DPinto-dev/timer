let countTime = process.argv.slice(2).sort((a, b) => a - b);
countTime = countTime.map(el => el * 1000);

if (countTime.length > 0) {
  for (const el of countTime) {
    if (el >= 0)
      setTimeout(() => {
        console.log(`${el / 1000} seconds`);
        process.stdout.write("\x07");
      }, el);
  }
} else {
  console.log("Please provide at least one time for your alarm (in seconds).");
  return false;
}
