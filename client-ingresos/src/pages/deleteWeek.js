

function DeleteWeek(){
    return(
        <div className="container">
        <form>
    <div className="mb-3">
        <h1>Seleccione la semana a Eliminar</h1>
      <label for="exampleInputFechaInicioSemana" className="form-label">Fechas Inicio de Semana</label>
      <input type="date" className="form-control" id="FechaInicioSemana" name="FechaInicioSemana" aria-describedby="FechaInicioSemana"/>
      </div>
    <div className="mb-3">
      <label for="exampleInputFechaFinalSemana" className="form-label">Fecha Final de Semana</label>
      <input type="date" class="form-control" id="FechaFinalSemana"name="FechaFinalSemana"/>
    </div>
    <button type="submit" className="btn btn-primary">Eliminar</button>
  </form>
  </div>
    )
}
export default DeleteWeek