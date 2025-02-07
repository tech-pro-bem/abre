export async function copyToClipboard(text: string, field: string) {
  const toastDiv = document.getElementById("toast-text");

  try {
    await navigator.clipboard.writeText(text);
    toastDiv!.classList.add("show");
    toastDiv!.innerHTML = `<span style="margin-right: 8px";>✅</span> ${field} copiado para a área de transferência.`;
    setTimeout(() => {
      toastDiv!.classList.remove("show");
    }, 3000);
  } catch {
    console.error("Falha ao copiar para a área de transferência.");
  }
}
