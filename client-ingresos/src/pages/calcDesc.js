function Descount(){
    return(
        <div className="container">
        <form method="post" action="/api/ingresos/semanas/descuento">
    <div className="mb-3">
        <h1>Select a Week to Calc Discount</h1>
      <label for="exampleInputFechaInicioSemana" className="form-label">Fechas Inicio de Semana</label>
      <input type="date" class="form-control" id="FechaInicioSemana" name="FechaInicioSemana" aria-describedby="FechaInicioSemana"/>
      </div>
    <div className="mb-3">
      <label for="exampleInputFechaFinalSemana" className="form-label">Fecha Final de Semana</label>
      <input type="date" class="form-control" id="FechaFinalSemana"name="FechaFinalSemana"/>
    </div>
    <button type="submit" class="btn btn-primary">Calcular Descuento</button>
  </form>
  </div>
    )
}
export default Descount