import { screen, render } from '@testing-library/react'
import Picker from './Picker'

it ('should render picker component', () => {
    const {container} = render(<Picker />)
    const selectHead = screen.getByLabelText(/Head/);
    const selectTorso = screen.getByLabelText(/Torso/);
    const selectLegs = screen.getByLabelText(/Legs/);
    const input = screen.getByLabelText(/Add A Catchphrase/)


    expect(selectHead).toBeInTheDocument();
    expect(selectHead).toBeInTheDocument();
    expect(selectTorso).toBeInTheDocument();
    expect(selectLegs).toBeInTheDocument();
    expect(input).toBeInTheDocument();
    expect(container).toMatchSnapshot();
});
