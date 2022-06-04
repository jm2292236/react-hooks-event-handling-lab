function KeyPad() {
    function handleChange () {
        console.log("Entering password...");
    }

    return (
        <input onChange={handleChange} type="password" name="password" placeholder="Enter password..."></input>
    )
}

export default KeyPad;
