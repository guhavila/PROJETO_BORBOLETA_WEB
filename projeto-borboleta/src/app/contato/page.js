// Gustavo Ávila Santos - 10753199
// Guilherme Ferraz Cabral - 10749385
// João Vitor Alves de Freitas - 10756078
// Enzo Marinho Bertoldo - 10752887

"use client";

import { useState } from "react";
import styles from "./contato.module.css";

export default function ContatoPage() {
  const [tipoPessoa, setTipoPessoa] = useState("cpf");
  const [documento, setDocumento] = useState("");

  function formatarDocumento(valor, tipo) {
    const numeros = valor.replace(/\D/g, "");
    if (tipo === "cpf") {
      return numeros
        .slice(0, 11)
        .replace(/(\d{3})(\d)/, "$1.$2")
        .replace(/(\d{3})(\d)/, "$1.$2")
        .replace(/(\d{3})(\d{1,2})$/, "$1-$2");
    } else {
      return numeros
        .slice(0, 14)
        .replace(/(\d{2})(\d)/, "$1.$2")
        .replace(/(\d{3})(\d)/, "$1.$2")
        .replace(/(\d{3})(\d)/, "$1/$2")
        .replace(/(\d{4})(\d{1,2})$/, "$1-$2");
    }
  }

  function handleTipoChange(tipo) {
    setTipoPessoa(tipo);
    setDocumento("");
  }

  function handleDocumentoChange(e) {
    setDocumento(formatarDocumento(e.target.value, tipoPessoa));
  }

  async function enviarMensagem(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const nome = formData.get("nome");
    alert(`Orçamento enviado com sucesso! Entraremos em contato em breve, ${nome}.`);
    e.target.reset();
    setDocumento("");
  }

  return (
    <main className={styles.pagina}>
      <div className={styles.container}>

        <div className={styles.cabecalho}>
          <span className={styles.tag}>Orçamento</span>
          <h1 className={styles.titulo}>Solicite seu orçamento</h1>
          <p className={styles.subtitulo}>
            Preencha os dados abaixo e retornaremos em até 1 dia útil.
          </p>
        </div>

        <form className={styles.form} onSubmit={enviarMensagem}>

          <div className={styles.grupo}>
            <label className={styles.label}>Nome completo</label>
            <input
              className={styles.input}
              name="nome"
              type="text"
              placeholder="Fulano da Silva"
              required
            />
          </div>

          <div className={styles.linha}>
            <div className={styles.grupo}>
              <label className={styles.label}>E-mail</label>
              <input
                className={styles.input}
                name="email"
                type="email"
                placeholder="fulano@empresa.com"
                required
              />
            </div>
            <div className={styles.grupo}>
              <label className={styles.label}>Telefone</label>
              <input
                className={styles.input}
                name="telefone"
                type="tel"
                placeholder="(11) 99999-9999"
              />
            </div>
          </div>

          <div className={styles.grupo}>
            <label className={styles.label}>Tipo de pessoa</label>
            <div className={styles.toggleWrapper}>
              <button
                type="button"
                className={`${styles.toggleBtn} ${tipoPessoa === "cpf" ? styles.ativo : ""}`}
                onClick={() => handleTipoChange("cpf")}
              >
                Pessoa Física (CPF)
              </button>
              <button
                type="button"
                className={`${styles.toggleBtn} ${tipoPessoa === "cnpj" ? styles.ativo : ""}`}
                onClick={() => handleTipoChange("cnpj")}
              >
                Pessoa Jurídica (CNPJ)
              </button>
            </div>
            <input
              className={styles.input}
              name="documento"
              type="text"
              placeholder={tipoPessoa === "cpf" ? "000.000.000-00" : "00.000.000/0000-00"}
              value={documento}
              onChange={handleDocumentoChange}
              required
            />
          </div>

          {tipoPessoa === "cnpj" && (
            <div className={styles.grupo}>
              <label className={styles.label}>Nome da empresa</label>
              <input
                className={styles.input}
                name="empresa"
                type="text"
                placeholder="Empresa Ltda."
              />
            </div>
          )}

          <div className={styles.grupo}>
            <label className={styles.label}>Descreva seu projeto</label>
            <textarea
              className={styles.textarea}
              name="mensagem"
              placeholder="Conte sobre o que você precisa, prazos, detalhes relevantes..."
              required
            />
          </div>

          <button type="submit" className={styles.botao}>
            Solicitar orçamento →
          </button>

        </form>
      </div>
    </main>
  );
}
