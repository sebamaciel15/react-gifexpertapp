import React from 'react'
import shallow from 'enzyme';
import { GifGridItem } from '../../components/GifGridItem';

describe('Pruebas sobre <GifGridItem', () => {

    const title = 'Un titulo';
    const url = 'https://localhost/algo.jpg'
    const wrapper = shallow(<GifGridItem title={title} url={url} />)

    test('debe mostrar el componente correctamente', () => {

        expect(wrapper).toMatchSnapshot();
    })

    test('debe tener un parrafo con el titulo', () => {
        const p = wrapper.find('p')
        expect(p.text().trim()).toBe(title)
    })

    test('debe tener la imagen igual al url y alt de los props', () => {
        const img = wrapper.find('img')
        // console.log(img.prop('src'));
        expect(img.prop('src')).toBe(url)
        expect(img.prop('alt')).toBe(title)
    })

    test('debe tener animate_fadeIn', () => {
        const div = wrapper.find('div')
        //animate__fadeIn
        // console.log(div.prop('className'))
        const className = div.prop('className')

        expect(className.includes('animate__fadeIn')).toBe(true)
    })
})