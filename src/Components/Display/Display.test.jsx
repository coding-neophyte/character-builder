import { render } from '@testing-library/react'
import Display from './Display'


it('should render catch phrases', () => {
    const {container} = render(<Display catchPhrases={['howdy', 'what it do', 'peace god']} />)


    expect(container).toMatchSnapshot();
})
