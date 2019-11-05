export class Contatto {
  nome: string
  cognome: string
  email: string
  cell: string
  nStelle: number

  constructor(nome: string, cognome: string, email: string, cell: string, nStelle: number) {
    this.nome = nome
    this.cognome = cognome
    this.email = email
    this.cell = cell
    this.nStelle = nStelle
  }

  getNomeCompleto(): string {
    return this.nome + ' ' + this.cognome
  }
}