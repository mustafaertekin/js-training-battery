
describe("Battery Charge - Test => ", () => {
    it('should test the function changeColor for case 0', () => {
        changeColor(0);
        let color = 0;
        if ($('#birinci').css('background-color') == 'rgb(255, 255, 255)') { 
            color = color + 1;
        }
        
        if ($('#ikinci').css('background-color') == 'rgb(255, 255, 255)') { 
            color = color + 1;
        }
        
        if ($('#ucuncu').css('background-color') == 'rgb(255, 255, 255)') { 
            color = color + 1;
        }
        
        if ($('#dorduncu').css('background-color') == 'rgb(255, 255, 255)') { 
            color = color + 1;
        }
        
        // If all the battery cells are white, it must be 1+1+1+1=4
        
        color.should.be.equal(4);
    });
    
    it('should test the function changeColor for case 1', () => {
        changeColor(1);
        let color = 0;
        console.log($('#birinci').css('background-color'));
        if ($('#birinci').css('background-color') == 'rgb(255, 0, 0)') { 
            color = 1;
        }
        color.should.be.equal(1);
    });
    
    it('should test the function changeColor case for 2', () => {
        changeColor(2);
        let color = 0;
        console.log($('#ikinci').css('background-color'));
        if ($('#ikinci').css('background-color') == 'rgb(255, 165, 0)') { 
            color = 1;
        }
        color.should.be.equal(1);
    });
    
    it('should test the function changeColor for case 3', () => {
        changeColor(3);
        let color = 0;
        console.log($('#ucuncu').css('background-color'));
        if ($('#ucuncu').css('background-color') == 'rgb(255, 255, 0)') { 
            color = 1;
        }
        color.should.be.equal(1);
    });
    
    it('should test the function changeColor for case 4', () => {
        changeColor(4);
        let color = 0;
        console.log($('#dorduncu').css('background-color'));
        if ($('#dorduncu').css('background-color') == 'rgb(0, 128, 0)') { 
            color = 1;
        }
        color.should.be.equal(1);
    });
});
