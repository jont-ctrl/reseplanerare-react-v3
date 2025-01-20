function ActivityForm() {
  return (
    <div>
      <form action=" " className="travel-form">
        <input
          type="text"
          name="aktivitet"
          id="aktivitet"
          placeholder="Ange aktivitet"
        />
        <input type="date" name="datum" id="datum" />
        <input type="text" name="plats" id="plats" placeholder="Ange plats" />
        <button type="submit">Lägg till</button>
      </form>
    </div>
  );
}

export default ActivityForm;
