/*
* Gerado automaticamente por GUMGAGenerator em 12/08/2015 11:46:51
*/


package br.com.empresa.piloto.domain.model;

import gumga.framework.domain.GumgaModel;
import gumga.framework.domain.GumgaMultitenancy;
import java.io.Serializable;
import java.util.*;
import java.math.BigDecimal;
import javax.persistence.*;
import gumga.framework.domain.domains.*;
import org.hibernate.annotations.Columns;
import org.hibernate.search.annotations.Field;
import org.hibernate.search.annotations.Indexed;
import org.hibernate.envers.Audited;
import com.fasterxml.jackson.annotation.JsonIgnore;

@GumgaMultitenancy
@SequenceGenerator(name = GumgaModel.SEQ_NAME, sequenceName = "SEQ_CLIENTE")
@Indexed
@Audited
@Entity
public class Cliente extends Pessoa implements Serializable {


    //@Field //Descomente para ser utilizado na busca multientidades
    private GumgaCNPJ cnpj;
    //@Field //Descomente para ser utilizado na busca multientidades
    private GumgaURL url;

    public Cliente(){
    }

    public GumgaCNPJ getCnpj() {
        return cnpj;
    }

    public void setCnpj(GumgaCNPJ cnpj) {
        this.cnpj = cnpj;
    }

    public GumgaURL getUrl() {
        return url;
    }

    public void setUrl(GumgaURL url) {
        this.url = url;
    }

}
