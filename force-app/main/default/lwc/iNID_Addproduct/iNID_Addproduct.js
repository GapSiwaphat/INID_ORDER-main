import { LightningElement , track } from 'lwc';

export default class INID_Addproduct extends LightningElement {

    //@track Search_Product
    @track showAddProductCard = true; 
    @track searchProductTerm = ''; 
    @track selectedProductId = ''; 
    @track productSelected = '';
    @track showProductDropdown = false;
    @track filteredProductOptions = [];

 
    //Add product
    handleAddProductClick() {
        this.showAddProductCard = true;
    }

    productOption = [
        { materialCode: '1000000002', description: 'AFZOLINE XL 10 MG.TAB.3X10 S', unitPrice:150.00 , salePrice:150.00 , quantity:10 , unit:'Box' },
        { materialCode: '1000000003', description: 'ALBER-T OINT.10 GM.' , unitPrice:150.00 , salePrice:150.00 , quantity:10 , unit:'Box' },
        { materialCode: '1000000004', description: 'ALLORA 5 MG.TAB.1X10 S', unitPrice:150.00 , salePrice:150.00 , quantity:10 , unit:'Box' },  
    ]

    // เปลี่ยน function ใหม่
    getTotal(product) {
        return product.salePrice * product.quantity ;
    }

    handleInputProduct(event) {
        this.searchProductTerm = event.target.value;
        if (this.searchProductTerm.length > 2) {
            this.filteredProductOptions = this.productOption.filter(prod =>
                prod.name.toLowerCase().includes(this.searchProductTerm.toLowerCase()) ||
                prod.id.includes(this.searchProductTerm)
            );            
            this.showProductDropdown = true;
        } else {
            this.showProductDropdown = false;
        }
    }

    handleSelectProduct(event) {
        const id = event.currentTarget.dataset.id;
        const name = event.currentTarget.dataset.name;
        this.searchProductTerm = `${id} ${name}`;
        this.selectedProductId = id;
        this.productSelected = name;
        this.showProductDropdown = false;
    }

    handleBlur() {
        setTimeout(() => {
            this.showProductDropdown = false;
        }, 200);
    }




}