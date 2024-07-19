export const notifyCartChange = (cart) => {
  const event = new CustomEvent('cartUpdated', { detail: cart })
  window.dispatchEvent(event)
}