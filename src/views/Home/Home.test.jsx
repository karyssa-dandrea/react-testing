import { render, screen } from '@testing-library/react'
import Home from './Home'

const user = {
  id: 1,
  created_at: '2021-12-13T00:17:29+00:00',
  name: 'Vonta',
  avatar: 'https://thumbs.gfycat.com/NiceRequiredGrunion-size_restricted.gif',
  header: 'https://static.wikia.nocookie.net/naruto/images/5/50/Team_Kakashi.png',
  likes: ['React', 'Anime', 'Traveling', 'Living', 'Tower Defense Games', 'Card Games'],
  motto: 'Res Non Verba',
  color: 'crimson',
}

test('Should render the user profile', async () => {
  render(<Home user={user} />)

  const name = await screen.findByText(/vonta/i)
  const motto = await screen.findByText(/res non verba/i)
  const instHeading = await screen.findByText(/interests/i)
  const avatar = await screen.findByAltText(/avatar/i)
  const headerImage = await screen.findByAltText(/header/i)
  const list = await screen.getByRole('list')

  expect(name).toBeInTheDocument()
  expect(motto).toBeInTheDocument()
  expect(instHeading).toBeInTheDocument()
  expect(avatar).toBeInTheDocument()
  expect(headerImage).toBeInTheDocument()
  expect(list.children.length).toEqual(6)
})
