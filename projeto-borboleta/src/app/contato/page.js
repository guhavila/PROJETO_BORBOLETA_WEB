export default function ContatoPage() {
  async function enviarMensagem(formData) {
    "use server";

    const nome = formData.get("nome");
    const email = formData.get("email");
    const mensagem = formData.get("mensagem");

    console.log({ nome, email, mensagem });
  }

  return (
    <main>
      <h1>Contate-nos</h1>
      <form action={enviarMensagem}>
        <input name="nome" type="text" placeholder="Nome" required />
        <input name="email" type="email" placeholder="E-mail" required />
        <textarea name="mensagem" placeholder="Sua mensagem" required />
        <button type="submit">Enviar</button>
      </form>
    </main>
  );
}
