describe('Test login endpoint /Opponent when not logged in as coach ', () => {

  // user not logged in
  it('Verify response when missing authentication', () => {
    //return 401
  })

  it('Verify/mock some scenario to return 500', () => {
    //return 500
  })

  // user is not authorised to use the app/page
  it('Verify response when a player who is not a coach try to use opponent api', () => {
    //return 403
  })

  // some required field is missing and also verify for all required fields
  it('Verify response when game id is missing in the request to add a new opponent', () => {
    //return 403
  })

  // send large string value for the opponent name
  it('Verify response when game id is missing in the request to add a new opponent', () => {
    //return 403
  })
})
