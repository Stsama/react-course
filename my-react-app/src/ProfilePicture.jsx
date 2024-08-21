

const ProfilePicture = () => {
    const imageUrl = "./src/assets/dv.jpg";
    const handleClick = () => console.log("ouch")

  return (
    <img onClick={handleClick} src={imageUrl}></img>
  )
}

export default ProfilePicture