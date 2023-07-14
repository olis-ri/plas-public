let jq = $.noConflict();
jq(document).ready(function(){

    let box = jq('#pidata').parent();
    box.addClass('container-fluid');
    box.css('font-size', '1rem');

    jq('#value_112859').css('margin-left', '.5em');

    jq('.container').each(function() {
        jq(this).removeClass('container');
        jq(this).addClass('container-fluid');
      });
    jq('table').each(function(){
        jq(this).addClass('table')
    });

    jq('div[id^=csection_]').each(function() {
        jq(this).css('font-size', '1.5rem');
        jq(this).css('background-color', '#25265e');
      });
    jq('.group_indent').each(function() {
        jq(this).css('font-size', '1.25rem');
        jq(this).parent().parent().css('background-color', '#95bddf');
    })
    jq('.group_indenti, .group_indentii').each(function() {
        jq(this).css('font-size', '1rem');
        jq(this).parent().parent().css('background-color', '#FAEB9E');
    });

    jq('label, .group0, .column_headers, .group1, .group2' ).each(function() {
        jq(this).css('font-size', '0.9rem');
    });

    jq('tr.Rollout').each(function() {
        jq(this).css({'display': 'flex', 'flex-direction': 'row'});
    });

    
    // single column with one additional column
    var alpha = ['grp25864', 'grp51743', 'grp51744', 'grp51745', 'grp51746', 'grp24772', 'grp24773', 'grp35700', 'grp24778', 'grp35485', 'grp24780', 'grp32636', 'grp49055', 'grp32637', 'grp32650', 'grp24781', 'grp24782', 'grp24783', 'grp48845', 'grp24797', 'grp35775', 'grp24798', 'grp48840', 'grp48841', 'grp48842', 'grp52720', 'grp52721', 'grp25959', 'grp24801', 'grp24802', 'grp35778', 'grp24803', 'grp24804', 'grp24805', 'grp35779',  'grp25915', 'grp32615', 'grp48843', 'grp48850', 'grp48846', 'grp50399', 'grp48847', 'grp35776', 'grp48848', 'grp48796', 'grp24785', 
    'grp48851', 'grp24786', 'grp24788', 'grp48854', 'grp48794', 'grp24790', 'grp24789', 'grp35471', 'grp24791', 'grp24792', 
    'grp35472', 'grp48888', 'grp35473', 'grp35474', 'grp52723', 'grp52724', 'grp52725'];
    // single column with two additional columns
    var beta = [['grp51747', 2], ['grp52711', 2], ['grp52712', 2], ['grp52713', 2], ['grp52714', 2], ['grp52715', 2], ['grp52716', 2], ['grp52717', 2], ['grp48795', 2], ['grp52718',2], ['grp24796',2]];
    // single column with three additional columns
    var delta = [['grp35478', 3], ['grp35479', 3]];
    var gamma = [['grp24779', 4], ['grp52726', 4]];
    var epsilon = [['grp25860', 3], ['grp25861', 5], ['grp25862', 2], ['grp25863', 2], ['grp32652', 1], ['grp25865', 2], ['grp25866',2], ['grp25868', 3]];

    
    function singleColumn(className) {
        var elDom = null;
        jq(`tr.${className}`).children().each( function () {
            if (jq(this).hasClass('row_header_col')) {
                elDom = jq(this).css({'flex': '0 0 25%'});
            } else {
                elDom = jq(this).css({'flex': '0 0 75%'});
            }
        })
        return elDom;
    }

    function twoOrMoreColumns(className, number) {
        var elDom = null;
        jq(`tr.${className}`).children().each( function () {
            if (jq(this).hasClass('row_title')) {
                elDom = jq(this).css({'flex': '0 0 25%'});
            } else if (jq(this).hasClass('in_columns')) {
                elDom = jq(this).css({'flex': `0 0 ${75/number}%`});
            } else {
                elDom = jq(this).css({'flex': '0 0 25%'});
            }
        })
        return elDom;
    }

    function destroyTheVisibleInvisible(className, number) {
        var elDom = null;
        jq(`tr.${className}`).children().each( function (i) {
            if (jq(this).hasClass('location_name')) {
                elDom = jq(this).css({'flex': '0 0 25%'});
                jq(this).next().remove();
            } else if (jq(this).hasClass('in_columns')) {
                elDom = jq(this).css({'flex': `0 0 ${75/number}%`});
            } 
        })
        return elDom;
    }

    function stopThePigeon(className) {
        var elDom = null;
        jq(`tr.${className}`).children().each( function (index, element) {
            if (index == 0) {
                jq(this).remove();
            } else {
                elDom = jq(this).css({'flex': '1'});
            }
        });
        return elDom;
    }

    function formWidth(className, number) {
        jq(`tr.${className} input[type='text']`).css({'width': `${number}%`})
        jq(`tr.${className} select`).css({'width': `${number}%`})
    }

    jq(alpha).each( function (index, string) {
        singleColumn(string);
        formWidth(string, 100);
    });

    jq(beta).each( function (index, string) {
        twoOrMoreColumns(string[0], string[1]);
        formWidth(string, 100)
    });

    jq(delta).each( function (index, string) {
        twoOrMoreColumns(string[0], string[1]);
        formWidth(string, 100)
    });

    jq(gamma).each( function (index, string) {
        twoOrMoreColumns(string[0], string[1]);
        formWidth(string, 100)
    });

    jq(epsilon).each( function (index, string) {
        destroyTheVisibleInvisible(string[0], string[1]);
        formWidth(string, 100)
    });

    // StopThePigeon Alpha
    jq('.group_name24771').css({'display': 'flex', 'padding': 0});
    jq('.group_name24771').children().each( function (index, el) {
        if (jq(this).is('th.subtitle')) {
            jq(this).remove();
        } else {
            jq(this).css({'flex': '0 0 10%'});
        }
    });
    // StopThePigeon Gamma
    jq('#group_24794_1').css({'display': 'flex', 'padding': 0});
    jq('#group_24794_1').children().each( function (index, el) {
        if (jq(this).hasClass('row_title')) {
            jq(this).remove();
        } else {
            jq(this).css({'flex': '0 0 10%'});
        }
    });
    // StopThePigeon Beta 
    // First the ID, then the class
    jq('.grp24794').css({'display': 'flex', 'padding': 0});
    jq('.grp24794').children().each( function (index, el) {
        if (index == 0) {
            jq(this).remove();
        } else {
            jq(this).css({'flex': '0 0 10%'});
        }
    });

    jq("input[type='text']").addClass('form-control');
    jq("#group_name24771 input").addClass('form-control');
    jq("select").addClass('form-control');
    // Somebody used the same class name for very different elements
    // had to use the ID in order to overwrite changes from a different section
    jq('#fieldset_24771').css('display', 'block');
    jq('#fieldset_24771').children().each( function () {
        jq(this).css('width', '100%');
    });
    

}); // end
