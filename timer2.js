const stdin = process.stdin;
stdin.setRawMode(true);
stdin.setEncoding("utf8");

let alertMsg =
  "Choose a number from 1 to 9 to set an alarm, or press 'b' to beep. If you want to exit press 'ctrl + c'.\n";

const createBeepTimer = () => {
  stdin.on("data", key => {
    // \u0003 maps to ctrl+c input
    if (key === "\u0003") {
      process.stdout.write("Thanks for using me, ciao!\n");
      process.exit();
    } else if (key === "b" || key === "B") {
      process.stdout.write("\x07");
    } else if ([1, 2, 3, 4, 5, 6, 7, 8, 9].includes(Number(key))) {
      process.stdout.write(`setting timer for ${key} seconds...\n`);
      setTimeout(() => {
        process.stdout.write("\x07");
      }, key * 1000);
    } else {
      process.stdout.write(alertMsg);
    }
  });
};

createBeepTimer();
