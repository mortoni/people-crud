import React, { useReducer, createContext, useState } from 'react'

const initialState = [
  {
    nome: 'Isabelle Santos Castro',
    cpf: '248.124.665-98',
    end: 'Praça Antônio Simões Ladeira',
    cep: '04623-065',
    tels: ['(11) 4361-8024'],
    emails: ['IsabelleSantosCastro@armyspy.com'],
    avatar: '1',
    id: 1,
  },
  {
    nome: 'Rodrigo Rodrigues Melo',
    cpf: '140.414.974-00',
    end: 'Rua José Ramos do Amaral',
    cep: '14811-166',
    tels: ['(16) 4639-6579'],
    emails: ['RodrigoRodriguesMelo@teleworm.us'],
    avatar: '2',
    id: 2,
  },
  {
    nome: 'Vinicius Rodrigues Santos',
    cpf: '952.472.853-28',
    end: 'Rua Oito',
    cep: '32371-300',
    tels: ['(31) 6483-3816'],
    emails: ['ViniciusRodriguesSantos@rhyta.com'],
    avatar: '3',
    id: 3,
  },
  {
    nome: 'Tiago Rodrigues Melo',
    cpf: '868.594.969-67',
    end: 'Rua Iguaçu',
    cep: '32656-030',
    tels: ['(31) 7449-7599'],
    emails: ['SofiaRibeiroRodrigues@teleworm.us'],
    avatar: '4',
    id: 4,
  },
]

export const defaultPerson = {
  nome: '',
  cpf: '',
  cep: '',
  end: '',
  tels: [],
  emails: [],
  avatar: '',
}

export const PeopleContext = createContext(initialState)

export const reducer = (people, action) => {
  const { payload } = action

  switch (action.type) {
    case 'add':
      const found = people.find(p => p.cpf === payload.cpf)

      if (!found) {
        const id = people.length > 0 ? people[people.length - 1].id + 1 : 1
        people.push({ ...payload, id: id })
      }

      return [...people]
    case 'delete':
      const target = people.findIndex(person => person.cpf === payload.cpf)
      people.splice(target, 1)

      return [...people]
    case 'edit':
      const i = people.findIndex(person => person.cpf === payload.cpf)
      people[i] = payload

      return [...people]
    default:
      return people
  }
}

export const PeopleContextProvider = ({ children }) => {
  const [people, peopleDispatch] = useReducer(reducer, initialState)
  const [searchTerm, setSearchTerm] = useState('')

  const value = { people, peopleDispatch, searchTerm, setSearchTerm }

  return <PeopleContext.Provider value={value}>{children}</PeopleContext.Provider>
}

export const PeopleContexConsumer = PeopleContext.Consumer
