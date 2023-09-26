class datePicker {
    elements ={
datePickerMenu: () =>  cy.contains("Datepicker"),
formPicker:()=> cy.get("[class='size-medium shape-rectangle']:first"),
today: () => cy.get('.today').click()

    }
}
module.exports = new datePicker();