/*
* Gerado automaticamente por GUMGAGenerator em 12/08/2015 11:46:57
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
@SequenceGenerator(name = GumgaModel.SEQ_NAME, sequenceName = "SEQ_ENTREGA")
@Indexed
@Audited
@Entity
public class Entrega extends GumgaModel<Long> implements Serializable {

    @Version
    private Integer version;


    //@Field //Descomente para ser utilizado na busca multientidades
    @Temporal(TemporalType.TIMESTAMP)
    private Date quando;
    //@Field //Descomente para ser utilizado na busca multientidades
    private Integer quantidade;
    //@Field //Descomente para ser utilizado na busca multientidades
     @Columns(columns = {
     @Column(name = "endereco_zip_code"),
     @Column(name = "endereco_premisse_type"),
     @Column(name = "endereco_premisse"),
     @Column(name = "endereco_number"),
     @Column(name = "endereco_information"),
     @Column(name = "endereco_neighbourhood"),
     @Column(name = "endereco_localization"),
     @Column(name = "endereco_state"),
     @Column(name = "endereco_country")
     })
    private GumgaAddress endereco;

    public Entrega(){
    }

    public Date getQuando() {
        return quando;
    }

    public void setQuando(Date quando) {
        this.quando = quando;
    }

    public Integer getQuantidade() {
        return quantidade;
    }

    public void setQuantidade(Integer quantidade) {
        this.quantidade = quantidade;
    }

    public GumgaAddress getEndereco() {
        return endereco;
    }

    public void setEndereco(GumgaAddress endereco) {
        this.endereco = endereco;
    }

}
