    $(function () {
        $('#ok').click(function () {
            var valido = true;
            $('input').each(function () {
                var grupo = $(this).parents('.form-group');
                var icono = grupo.find('.glyphicon');
                if (this.checkValidity()) {
                    grupo.addClass('has-success').removeClass('has-error');
                    icono.addClass('glyphicon-ok').removeClass('glyphicon-remove');
                } else {
                    grupo.addClass('has-error').removeClass('has-success');
                    icono.addClass('glyphicon-remove').removeClass('glyphicon-ok');
                    valido = false;
                }
            });

            if (valido) {
                $('#miModal').modal('hide');
                $('#success-alert').removeClass('hidden');
            } else {
                $('#success_alert').removeClass;
            }

        });
    });