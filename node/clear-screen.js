/**
* 清理终端信息，保留上次记录
* via vitejs
*/
function clearScreen() {
  const repeatCount = process.stdout.rows - 2;
  const blank = repeatCount > 0 ? "\n".repeat(repeatCount) : "";
  console.log(blank);
  readline.cursorTo(process.stdout, 0, 0);
  readline.clearScreenDown(process.stdout);
}

/**
* ===================== or =========================
*/
const isWindows = process.platform === 'win32';
const CLEAR = isWindows ? "\x1B[2J\x1B[0f" : "\x1B[2J\x1B[3J\x1B[H";

// usage
process.stdout.write(CLEAR)
