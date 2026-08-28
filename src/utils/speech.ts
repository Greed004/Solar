// Brazilian Portuguese Voice Synthesis & Recognition Utilities

export function speakText(text: string, onEnd?: () => void): boolean {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
    return false;
  }

  // Cancel any ongoing speech
  window.speechSynthesis.cancel();

  // Strip markdown formatting for cleaner audio reading
  const cleanText = text
    .replace(/\*\*(.*?)\*\*/g, '$1')
    .replace(/\*(.*?)\*/g, '$1')
    .replace(/#{1,6}\s?/g, '')
    .replace(/\[(.*?)\]\(.*?\)/g, '$1')
    .replace(/[☀️⚡💰🏠🏢🌱•\-]/g, ' ')
    .trim();

  const utterance = new SpeechSynthesisUtterance(cleanText);
  utterance.lang = 'pt-BR';
  utterance.rate = 1.05;
  utterance.pitch = 1.0;

  // Try to find a pt-BR voice
  const voices = window.speechSynthesis.getVoices();
  const ptVoice = voices.find(
    (v) => v.lang.startsWith('pt') || v.lang.includes('BR') || v.name.includes('Luciana') || v.name.includes('Felipe') || v.name.includes('Google português do Brasil')
  );
  if (ptVoice) {
    utterance.voice = ptVoice;
  }

  if (onEnd) {
    utterance.onend = onEnd;
    utterance.onerror = onEnd;
  }

  window.speechSynthesis.speak(utterance);
  return true;
}

export function stopSpeaking() {
  if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
    window.speechSynthesis.cancel();
  }
}
