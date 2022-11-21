import "./css/index.css"
import IMask from "imask"

const ccBgColor01 = document.querySelector(".cc-bg svg > g g:nth-child(1) path")
const ccBgColor02 = document.querySelector(".cc-bg svg > g g:nth-child(2) path")
const ccLogo = document.querySelector(".cc-logo span:nth-child(2) img")

function setarTipoCartao(type) {
  const colors = {
    visa: ["#436D99", "#2D57F2"],
    mastercard: ["#DF6F29", "#C69347"],
    defaul: ["black", "gray"],
  }

  ccBgColor01.setAttribute("fill", colors[type][0])
  ccBgColor02.setAttribute("fill", colors[type][1])
  ccLogo.setAttribute("src", `cc-${type}.svg`)
}

globalThis.setarTipoCartao = setarTipoCartao

const securityCode = document.querySelector('#security-code')

const securityCodePattern = {
  mask: "0000",
}

const securityCodeMasked = IMask(securityCode, securityCodePattern)