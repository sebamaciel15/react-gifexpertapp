import { useFetchGifs } from "../../hooks/useFetchGifs"
import { renderHook } from '@testing-library/react-hooks'

describe('pruebas en el hook useFetchGif', () => {


    test('debe retornar el estado inicial', async () => {

        const { result, waitForNextUpdate } = renderhook(() => useFetchGifs('One Punch'))
        const { data, loading } = result.current;

        await waitForNextUpdate();

        // const { data, loading } = useFetchGifs('One Punch')

        expect(data).toEqual([])
        expect(loading).toBe(true)
    })

    test('debe retornar un arreglo de imgs y el loading en false', async () => {

        const { result, waitForNextUpdate } = renderhook(() => useFetchGifs('One Punch'))
        await waitForNextUpdate();
        const { data, loading } = result.current;

        expect(data.length).toBe(10)
        expect(loading).toBe(false)


    })
})