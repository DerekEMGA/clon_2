export const getPases=async()=>{
  const res = await fetch(`${import.meta.env.VITE_API_URL}/pasesDeSalida`)
  const pases = await res.json()
  return pases
}

export const modificarPase=async(id,pase)=>{
  try {
    const res = await fetch(`${import.meta.env.VITE_API_URL}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(pase)
    })
    await res.json()    
  } catch (error) {
    console.log(error)
  }
}

export const registrarPase = async (paseDeSalida) => {
  try {
    const res = await fetch(`${import.meta.env.VITE_API_URL}/pasesDeSalida`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(paseDeSalida),
    });
    await res.json()
  } catch (error) {
    console.log(error);
  }
};
