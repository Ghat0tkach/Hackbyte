export async function downloadImage(_id, photo) {
  FileSaver.saveAs(photo, `download-${_id}.mp4`);
}
