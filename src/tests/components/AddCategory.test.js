import React from 'react'
import { AddCategory } from "../../components/AddCategory"
import { shallow } from "enzyme";
import '@testing-library/jest-dom'


describe('pruebas en <AddCategory />', () => {

    const setCategories = jest.fn()
    let wrapper = shallow(<AddCategory setCategories={setCategories} />)

    beforeEach(() => {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={setCategories} />)
    })

    test('debe mostrarse correctamente', () => {

        expect(wrapper).toMatchSnapshot()
    })

    test('debe cambiar la caja de texto', () => {

        const input = wrapper.find('input')
        const value = 'Hola mundo'
        input.simulate('change', { target: { value } })

        wrapper.find('p').text().trim().toBe(value)
    })

    test('no debe postear la informacion con Submit', () => {

        wrapper.find('form').simulate('submit', { preventDefault() { } })

        expect(setCategories).not.toHaveBeenCalled()
    })

    test('debe llamar el setCategories y limpiar la caja de texto', () => {

        const value = 'Hola mundo';

        //simular el inputChange
        wrapper.find('input').simulate('change', { target: { value } })
        //simular el submit
        wrapper.find('form').simulate('change', { preventDefault() { } })

        //setCategories se debe de haber llamado
        expect(setCategories).toHaveBeenCalled()
        expect(setCategories).toHaveBeenCalledTimes(1)
        expect(setCategories).toHaveBeenCalled(expect.any(Function))
        //el valor del input debe estar ''
        expect(wrapper.find('input').prop('value')).toBe('')

    })
})