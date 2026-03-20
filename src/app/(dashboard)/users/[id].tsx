import Image from "next/image";

const UserDetails = () => {
  return (
      <div>
        <Image
          src="/images/lendsqr-logo.svg"
          alt="Lendsqr logo"
          width={150}
          height={40}
          priority
        />
      </div>
  )
}


export default UserDetails
