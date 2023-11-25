export const formattedTime = (sec: number) => {
    const minutes = Math.floor(sec / 60);
    const seconds = String(Math.floor(sec % 60)).padStart(2, '0');

    return `${minutes}:${seconds}`;
};
