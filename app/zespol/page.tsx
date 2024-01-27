import Link from "next/link";


export const metadata = {
  title: 'Zespół',
  description: 'xyz',
}

async function getTeamMembers() {
  const res = await fetch(`https://admin.ipionierzy.pl/api/team?populate=*`)
  const { data } = await res.json()
  return data.attributes.team
}



const Team = async () => {

  const members = await getTeamMembers();

  return (
    <>
      <section className="relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="pt-32 pb-12 md:pt-40 md:pb-20">
            <div>
              <h2 className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">Zespół</h2>
            </div>
          </div>
        </div>
    </section>
    <section className="relative">
      <div className="absolute inset-0 bg-gray-100 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto p-5">
        <ul>
          {members.map(({ id, name, surname, description, role}: any) => {
            return (
              <li key={id} className="my-5 p-5 bg-white rounded-2xl">
                  <h2 className="text-2xl font-semibold">{name} {surname}</h2>
                  <h3 className="text-l">{role}</h3>
                  <p className="mt-5 font-sans text-gray-600 leading-relaxed">
                    {description}
                  </p>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
    </>
  );
}

export default Team