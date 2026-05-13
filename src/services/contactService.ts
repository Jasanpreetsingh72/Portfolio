interface ContactPayload {
  name: string
  email: string
  message: string
}

export const submitContactForm = async (payload: ContactPayload) => {
  await new Promise((resolve) => window.setTimeout(resolve, 400))
  return { ok: true, payload }
}
