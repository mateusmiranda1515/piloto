/*
* Gerado automaticamente por GUMGAGenerator em 12/08/2015 11:46:49
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
@SequenceGenerator(name = GumgaModel.SEQ_NAME, sequenceName = "SEQ_FUNCIONARIO")
@Indexed
@Audited
@Entity
public class Funcionario extends Pessoa implements Serializable {


    //@Field //Descomente para ser utilizado na busca multientidades
    private GumgaCPF cpf;
    //@Field //Descomente para ser utilizado na busca multientidades
    @Temporal(TemporalType.DATE)
    private Date dataNascimento;
    //@Field //Descomente para ser utilizado na busca multientidades
    @ManyToMany
    private Set<Servico> capacidades;
    //@Field //Descomente para ser utilizado na busca multientidades
    @ManyToMany
    private Set<HorarioTrabalho> horarios;

    public Funcionario(){
    }

    public GumgaCPF getCpf() {
        return cpf;
    }

    public void setCpf(GumgaCPF cpf) {
        this.cpf = cpf;
    }

    public Date getDataNascimento() {
        return dataNascimento;
    }

    public void setDataNascimento(Date dataNascimento) {
        this.dataNascimento = dataNascimento;
    }

    public Set<Servico> getCapacidades() {
        return capacidades;
    }

    public void setCapacidades(Set<Servico> capacidades) {
        this.capacidades = capacidades;
    }

    public Set<HorarioTrabalho> getHorarios() {
        return horarios;
    }

    public void setHorarios(Set<HorarioTrabalho> horarios) {
        this.horarios = horarios;
    }

}
