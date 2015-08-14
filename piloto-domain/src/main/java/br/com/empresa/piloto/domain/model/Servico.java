/*
* Gerado automaticamente por GUMGAGenerator em 12/08/2015 11:47:00
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
@SequenceGenerator(name = GumgaModel.SEQ_NAME, sequenceName = "SEQ_SERVICO")
@Indexed
@Audited
@Entity
public class Servico extends GumgaModel<Long> implements Serializable {

    @Version
    private Integer version;


    //@Field //Descomente para ser utilizado na busca multientidades
    private String nome;
    //@Field //Descomente para ser utilizado na busca multientidades
    private String codigoUniversal;

    public Servico(){
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getCodigoUniversal() {
        return codigoUniversal;
    }

    public void setCodigoUniversal(String codigoUniversal) {
        this.codigoUniversal = codigoUniversal;
    }

}
