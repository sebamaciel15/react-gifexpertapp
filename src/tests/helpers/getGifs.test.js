import { getGifs } from "../../helpers/getGifs"


describe('Pruebas en getGifs', () => {

    test('debe traer 10 elementos', async () => {

        const gifs = await getGifs('One Punch');

        expect(gifs.length).toBe(10)

    })

    test('debe traer 10 elemento', async () => {

        const gifs = await getGifs('');

        expect(gifs.length).toBe(0)

    })
})