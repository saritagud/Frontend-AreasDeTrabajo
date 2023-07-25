function CardOficina({ imagenReferencia, titulo, direccion, precioDia }) {
  return (
    <>
      <section
        className="h-[60vh] rounded-2xl mb-10 flex flex-col justify-end w-[80%] m-10"
        style={{ backgroundImage: `url(${imagenReferencia})` }}
      >
        <div className="w-full font-OpenSans text-left text-xl p-3 bg-azulClaro bg-opacity-40 mb-10 flex flex-col gap-2">
          <h1 className="font-bold">{titulo}</h1>
          <p>{direccion}</p>
          <p>{precioDia}</p>
        </div>
      </section>
    </>
  );
}

export default CardOficina;

