export class HomePage{

    goToHomePage(){
        const homeBtn = cy.get('[title="Home"]')
        homeBtn.should("be.visible")
        homeBtn.click()
    }

    searchProduct(prod){
        const searchBar = cy.get('#search_query_top')
        searchBar.should("be.visible")
        searchBar.type(prod,{delay:0})

        const searchBtn = cy.get('form>button[type="submit"]')
        searchBtn.should("be.visible")
        cy.wait(2000).then(function(){
            searchBtn.click()
        })
        
    }

    sortproducts(){
        cy.get('#selectProductSort').select('name:asc')
        cy.wait(4000)
        cy.get('#selectProductSort>option:nth-child(4)').should("have.attr", "Selected")
    
    }
    selectProduct(prod){
        cy.get("div>[title="+prod+"]").should("be.visible").click()

    }
    validatePriceDescription(){
        const price = cy.get('[itemprop="price"]')
        price.contains("$27.00")

        const desc = cy.get('[itemprop="description"]')
        desc.find('p').contains("Short sleeved blouse with feminine draped sleeve detail.")
    }

    addToCart(addq, si){
        const addQunatity = cy.get('#quantity_wanted_p>input[type=text]')
        addQunatity.should("be.visible")
        addQunatity.clear()
        addQunatity.type(addq)

        const size = cy.get('#group_1')
        size.select(si)

        cy.wait(3000)
        cy.get('.selected>a[name="Black"]').should("be.visible")
        cy.wait(3000)
        const color = cy.get('#color_to_pick_list>li:nth-child(1)>a')   // select white color. 2 for black
        color.click()
        cy.wait(3000)
        cy.get('.selected>a[name="White"]').should("be.visible")

        const addToCartBtn = cy.get('#add_to_cart>button')
        addToCartBtn.should("be.visible")
        addToCartBtn.click()
    }

    validaddReview(ti, comm){
        const reviewBtn = cy.get('.comments_advices>li>a').should("be.visible")
        reviewBtn.click()

        const title = cy.get('input#comment_title')
        title.should("be.visible")
        title.clear()
        title.type(ti)

        const comment = cy.get('textarea#content')
        comment.should("be.visible")
        comment.clear()
        comment.type(comm)

        cy.get('#submitNewMessage').should("be.visible").click()        // send button

    }


}