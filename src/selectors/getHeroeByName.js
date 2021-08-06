import{heroes} from '../data/heroes';

export const getHeroeByName = (name='') => {
    name=name.toLocaleLowerCase();
if (name==='') {
    return []
}
    return heroes.filter(hero=> hero.superhero.toLocaleLowerCase().includes(name));
}
