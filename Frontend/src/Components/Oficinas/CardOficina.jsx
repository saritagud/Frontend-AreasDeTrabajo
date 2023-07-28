function CardOficina({ imagenReferencia, titulo, direccion, precioDia }) {
  return (
    <>
      <section
        className="h-[60vh] rounded-2xl mb-10 flex flex-col justify-end w-[80%] m-10 sm:w-[50%] sm:h-[70vh] bg-no-repeat bg-contain border-r-2 border-b-2 border-black/30 md:w-[45%] lg:m-5 lg:w-[30%] lg:h-[60vh] xl:w-[25%] xl:h-[70vh]"
        style={{ backgroundImage: `url(${imagenReferencia})` }}
      >
        <div className="w-full font-OpenSans text-left text-xl p-3 bg-azulClaro bg-opacity-70 mb-10 flex flex-col gap-2">
          <h1 className="font-bold">{titulo}</h1>
          <p>{direccion}</p>
          <p>{precioDia}</p>
        </div>
      </section>
    </>
  );
}

export default CardOficina;

