export default function getFan() {
  return {
    pin: 1,
    energized: false,
    isEnergized() {
      return this.energized;
    },
    toggle() {
      this.energized = !this.energized;
    }
  }
};