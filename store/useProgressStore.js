import create from 'zustand'
const useProgressStore = create((set) => ({
  isAnimating: false,
  setIsAnimating: (isAnimating) => set(() => ({ isAnimating }))
}))

export default useProgressStore