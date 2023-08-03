
export const AvatarCreator = ({img = ''}) => {

  return (
    <div className="avatar" style={{ backgroundImage: "url(" + img + ")" }}>
    </div>
  )
}
