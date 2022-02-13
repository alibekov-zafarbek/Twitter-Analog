import "./AppHeader.css"

const AppHeader = ({liked, AllPosts}) => {
  return (
    <div className="app-header d-flex">
      <h1>Zafarbek Alibekov</h1>
      <h2>{AllPosts} posts, like {liked}</h2>
    </div>
  )
}

export default AppHeader