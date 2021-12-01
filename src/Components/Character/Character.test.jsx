import { screen, render } from '@testing-library/react'
import Character from './Character'

it('should render elements in character component', () => {
    const {container} = render(<Character head='beanie' torso='cardigan' legs='baggy'  />)

    const selectHead = screen.getByLabelText('headArticle')
    const selectTorso = screen.getByLabelText('torsoArticle')
    const selectLegs = screen.getByLabelText('legsArticle')


    expect(selectHead).toHaveStyle(`backgroundImage: url(./beanie.png)`)
    expect(selectTorso).toHaveStyle(`backgroundImage: url(./cardigan.png)`)
    expect(selectLegs).toHaveStyle(`backgroundImage: url(./baggy.png)`)
    expect(container).toMatchSnapshot();
})
