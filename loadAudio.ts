export type Sound = {
  path: string;
  buffer: AudioBuffer;
};

function loadOne(
  path: string,
  audioContext: AudioContext,
): Promise<AudioBuffer> {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();
    request.open("GET", path, true);
    request.responseType = "arraybuffer";

    // Decode asynchronously
    request.addEventListener("load", () => {
      audioContext.decodeAudioData(
        request.response,
        buffer => {
          resolve(buffer);
        },
        e => {
          reject(e);
        },
      );
    });

    request.send();
  });
}

export default function loadAudio(
  paths: string[],
  audioContext: AudioContext,
  onProgress: (progress: number) => void,
): Promise<Sound[]> {
  let progress = 0;

  const promises = paths.map(path =>
    loadOne(path, audioContext).then(buffer => {
      progress += 1;
      if (progress < promises.length) {
        onProgress(progress / paths.length); // TODO: Look up Promise.notify()
      }

      return { path, buffer };
    }),
  );

  return Promise.all(promises);
}
